import Link from 'next/link';

const chapters = [
  {
    title: 'Chapter 12: PPR',
    links: [
      { label: 'example with connection', route: '/chapter-12/connection' },
      {
        label: 'dynamic component with child client component',
        route: '/chapter-12/dynamic-with-client-child',
      },
      { label: 'example with searchParams', route: '/chapter-12/searchparams' },
    ],
  },
];

export default function Home() {
  return (
    <>
      <h1 className='text-xl font-bold mb-4'>home</h1>
      <div>
        {chapters.map((chapter) => {
          return (
            <div key={chapter.title} className='mb-4'>
              <h2>{chapter.title}</h2>
              <ul>
                {chapter.links.map((link) => (
                  <li key={link.route}>
                    <Link
                      href={link.route}
                      className='underline text-blue-500'
                      // prefetch={false}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}
