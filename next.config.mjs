/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['phplaravel-1193282-4443773.cloudwaysapps.com',
            'kidzy-web.vercel.app',
            'cdn2.steamgriddb.com',
            'example.com',
            'encrypted-tbn2.gstatic.com',
        ],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: '**.cloudinary.com',
            },
          ],
        
       
      },
};

export default nextConfig;
