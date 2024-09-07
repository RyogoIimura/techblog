/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [
			"picsum.photos",
			'rfbshavdgwysigcizyjl.supabase.co',
			"lh3.googleusercontent.com",
		],
    },
      async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },


};

export default nextConfig;
