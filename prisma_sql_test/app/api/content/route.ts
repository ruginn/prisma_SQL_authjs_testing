import { NextResponse } from 'next/server';

// const posts = [
//   {
//     title: 'Lorem Ipsum',
//     slug: 'lorem-ipsum',
//     content:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
//   },
//   {
//     title: 'Dolor Sit Amet',
//     slug: 'dolor-sit-amet',
//     content:
//       'Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
//   },
//   {
//     title: 'Consectetur Adipiscing',
//     slug: 'consectetur-adipiscing',
//     content:
//       'Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.',
//   },
//   {
//     title: 'Integer Nec Odio',
//     slug: 'integer-nec-odio',
//     content:
//       'Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent.',
//   },
//   {
//     title: 'Praesent Libero',
//     slug: 'praesent-libero',
//     content:
//       'Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna.',
//   },
// ];

interface User {
  id: number;
  username: string;
  email: string;
  age: number;
  is_active: boolean;
  description: string;
}

const users: User[] = [
  {
    id: 1,
    username: "john_doe",
    email: "john@example.com",
    age: 28,
    is_active: true,
    description: "Passionate coder and hiker, enjoying an active lifestyle.",
  },
  {
    id: 2,
    username: "jane_smith",
    email: "jane@example.com",
    age: 32,
    is_active: false,
    description: "Creative writer exploring mindfulness and expressing through art.",
  },
  {
    id: 3,
    username: "alex_wilson",
    email: "alex@example.com",
    age: 23,
    is_active: true,
    description: "Student balancing studies, part-time work, and guitar strums.",
  },
  {
    id: 4,
    username: "lisa_jones",
    email: "lisa@example.com",
    age: 45,
    is_active: true,
    description: "Dedicated mother of three, passionate about gardening and community volunteering.",
  },
  {
    id: 5,
    username: "michael_brown",
    email: "michael@example.com",
    age: 40,
    is_active: true,
    description: "Tech enthusiast, traveler, and amateur chef exploring world cuisines.",
  },
  {
    id: 6,
    username: "sara_rodriguez",
    email: "sara@example.com",
    age: 29,
    is_active: false,
    description: "Doctor saving lives, enjoys running marathons in free time.",
  },
  {
    id: 7,
    username: "peter_nguyen",
    email: "peter@example.com",
    age: 34,
    is_active: true,
    description: "Architect who loves sketching, designing, and playing the piano.",
  },
  {
    id: 8,
    username: "emily_wang",
    email: "emily@example.com",
    age: 27,
    is_active: true,
    description: "Environmental activist, passionate rock climber, and aspiring writer.",
  },
  {
    id: 9,
    username: "david_smith",
    email: "david@example.com",
    age: 22,
    is_active: false,
    description: "College student, bookworm, and part-time barista with a love for astronomy.",
  },
  {
    id: 10,
    username: "olivia_jackson",
    email: "olivia@example.com",
    age: 31,
    is_active: true,
    description: "Marketing guru, yoga enthusiast, and travel blogger chasing adventures.",
  },
];

export async function GET() {
  return NextResponse.json(users);
}