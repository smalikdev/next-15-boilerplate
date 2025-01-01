export { default } from "next-auth/middleware"

export const config = {
  matcher: [
    "/api/(.*)",
    // "/operation_management",
    // "/customer_onboarding/(.*)",
    // "/product_management/(.*)",
    // "/settings/(.*)",
    // "/dashboard/(.*)",
    // "/account",
    // "/report",
    "/ticket",
  ],
}
