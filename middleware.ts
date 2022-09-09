// import { getToken } from 'next-auth/jwt';
// import { withAuth } from 'next-auth/middleware';
// import jwt from 'jsonwebtoken';

// const secret = process.env.NEXTAUTH_SECRET;

// export default withAuth({
//   callbacks: {
//     authorized({ req, token, ...rest }) {
//       const token2 = getToken({
//         req: req,
//         raw: true,
//       });

//       const sessionToken = req.cookies.get('next-auth.session-token') || '';
//       const payload = jwt.verify(sessionToken, process.env.NEXT_AUTH_SECRET!);
//       console.log(payload);

//       console.log(req.cookies.get('next-auth.session-token'));

//       // if (req.nextUrl.pathname === '/admin') {
//       //   return token?.userRole === 'admin';
//       // }
//       return !!token;
//     },
//   },
// });

// export const config = { matcher: ['/admin', '/me'] };

const x = () => {};
export default x;
