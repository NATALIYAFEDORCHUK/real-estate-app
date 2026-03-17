import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.property.deleteMany();
  await prisma.user.deleteMany();

  const user = await prisma.user.create({
    data: {
      email: 'test@gmail.com',
      password: '123456',
    },
  });
  const userId = user.id; // Припустимо, що користувач з id=1 існує.
  //  Ви можете створити його окремо або додати логіку для створення користувача, якщо його немає.
  // Якщо немає, додаємо початкові дані
  await prisma.property.createMany({
    data: [
      {
        title: 'The Marina Torch',
        imageUrl:
          'https://res.cloudinary.com/dh5i9exjr/image/upload/marina-torch_t18joh.jpg',
        totalPrice: 6500000,
        yieldPercent: 9.25,
        soldPercent: 75,
        ticketPrice: 60000,
        daysLeft: 150,
        ownerId: userId,
      },
      {
        title: 'HHHR Tower',
        imageUrl:
          'https://res.cloudinary.com/dh5i9exjr/image/upload/hhhr-tower_mwadni.jpg',
        totalPrice: 6500000,
        yieldPercent: 9.25,
        soldPercent: 75,
        ticketPrice: 60000,
        daysLeft: 150,
        ownerId: userId,
      },
      {
        title: 'Ocean Peaks',
        imageUrl:
          'https://res.cloudinary.com/dh5i9exjr/image/upload/ocean-peaks_p6tkhs.jpg',
        totalPrice: 6500000,
        yieldPercent: 9.25,
        soldPercent: 75,
        ticketPrice: 60000,
        daysLeft: 150,
        ownerId: userId,
      },
      {
        title: 'Al Yaqoub Tower',
        imageUrl:
          'https://res.cloudinary.com/dh5i9exjr/image/upload/al-yaqoub-tower_vuzmon.jpg',
        totalPrice: 6500000,
        yieldPercent: 9.25,
        soldPercent: 75,
        ticketPrice: 60000,
        daysLeft: 150,
        ownerId: userId,
      },
    ],
  });

  console.log('Seed completed: properties added.');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());

// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// async function main() {
//   // await prisma.property.deleteMany(); // Clear existing data

//   await prisma.property.createMany({
//     data: [
//       {
//         title: 'The Marina Torch',
//         imageUrl:
//           'https://res.cloudinary.com/dh5i9exjr/image/upload/marina-torch_t18joh.jpg',
//         totalPrice: 6500000,
//         yieldPercent: 9.25,
//         soldPercent: 75,
//         ticketPrice: 60000,
//         daysLeft: 150,
//       },
//       {
//         title: 'HHHR Tower',
//         imageUrl:
//           'https://res.cloudinary.com/dh5i9exjr/image/upload/hhhr-tower_mwadni.jpg',
//         totalPrice: 6500000,
//         yieldPercent: 9.25,
//         soldPercent: 75,
//         ticketPrice: 60000,
//         daysLeft: 150,
//       },
//       {
//         title: 'Ocean Peaks',
//         imageUrl:
//           'https://res.cloudinary.com/dh5i9exjr/image/upload/ocean-peaks_p6tkhs.jpg',
//         totalPrice: 6500000,
//         yieldPercent: 9.25,
//         soldPercent: 75,
//         ticketPrice: 60000,
//         daysLeft: 150,
//       },
//       {
//         title: 'Al Yaqoub Tower',
//         imageUrl:
//           'https://res.cloudinary.com/dh5i9exjr/image/upload/al-yaqoub-tower_vuzmon.jpg',
//         totalPrice: 6500000,
//         yieldPercent: 9.25,
//         soldPercent: 75,
//         ticketPrice: 60000,
//         daysLeft: 150,
//       },
//     ],
//   });

//   console.log('Seed completed');
// }

// main()
//   .catch(console.error)
//   .finally(() => prisma.$disconnect());
