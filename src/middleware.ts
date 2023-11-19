export { default } from "next-auth/middleware";

// 로그인이 된 사람만 matcher에 작성된 경로로 접근이 가능
export const config = { matcher: ["/admin", "/user"] };
