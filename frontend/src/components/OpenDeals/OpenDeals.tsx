import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import styles from "./OpenDeals.module.css";
import { api } from "../../services/api";

interface Deal {
  id: number;
  imageUrl: string;
  title: string;
  totalPrice: number;
  ticketPrice: number;
  yieldPercent: number;
  daysLeft: number;
  soldPercent: number;
}

const OpenDeals: React.FC = () => {
  const [deals, setDeals] = useState<Deal[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { token } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    api.get("/properties").then((res) => {
      console.log("DATA FROM API:", res.data);
    });
  }, []);

  useEffect(() => {
    const fetchDeals = async () => {
      setLoading(true);
      setError(null);

      try {
        const { data } = await api.get<Deal[]>("/properties");
        setDeals(data);
      } catch (err: unknown) {
        if (err instanceof Error) setError(err.message);
        else setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    if (token) fetchDeals(); // робимо запит лише якщо токен є
  }, [token]);

  if (loading) return <div className={styles.openDeals}>Loading deals...</div>;
  if (error) return <div className={styles.openDealsError}>{error}</div>;

  return (
    <div className={styles.openDeals}>
      {deals.length === 0 ? (
        <p>No deals available</p>
      ) : (
        <>
          <h1 className={styles.title}>Open Deals</h1>
          <div className={styles.dealsGrid}>
            {deals.map((deal) => (
              <div key={deal.id} className={styles.dealCard}>
                <div className={styles.imagesBox}>
                  <img
                    src={deal.imageUrl}
                    alt={deal.title}
                    className={styles.dealImage}
                  />
                </div>

                <div className={styles.contentBox}>
                  <h2 className={styles.dealTitle}>{deal.title}</h2>
                  <div className={styles.detailsBox}>
                    <div className={styles.price}>
                      <p className={styles.text}>
                        {deal.totalPrice.toLocaleString()} Dhs
                      </p>
                      <p className={styles.text}>
                        Ticket - {deal.ticketPrice} Dhs
                      </p>
                    </div>
                    <div className={styles.price}>
                      <p className={styles.text}>Yield: {deal.yieldPercent}%</p>
                      <p className={styles.text}>Days Left: {deal.daysLeft}</p>
                    </div>
                    <div className={styles.price}>
                      <p className={styles.text}>Sold: {deal.soldPercent}%</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default OpenDeals;
