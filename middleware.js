export { default } from 'next-auth/middleware'
export const config = {
  matcher: [
    '/properties/add',
    '/profile',
    '/properties/saved',
    '/notifications',
    '/properties/:id/edit',
  ],
}
