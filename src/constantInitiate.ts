import * as dotenv from 'dotenv';
dotenv.config();
dotenv.config({ path: process.env.CUSTOM_ENV });

export let JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
export let APP_PORT = process.env.APP_PORT;

const constantInitiate = () => {

    JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
    APP_PORT = process.env.APP_PORT;
};




export default constantInitiate;
