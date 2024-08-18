
const API_END_POINT = process.env.NODE_ENV !== 'production' ? "http://localhost:3000" : "https://opportunest.onrender.com";
export const USER_API_END_POINT=`${API_END_POINT}/api/v1/user`;
export const JOB_API_END_POINT=`${API_END_POINT}/api/v1/job`;
export const APPLICATION_API_END_POINT=`${API_END_POINT}/api/v1/application`;
export const COMPANY_API_END_POINT=`${API_END_POINT}/api/v1/company`;

