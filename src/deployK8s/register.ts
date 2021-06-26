import { InvokeFunction, RegisterFunction } from '../types';

const register: RegisterFunction = (name: string, invokeFunction: InvokeFunction) => {
    console.log({ name, invokeFunction });
};

export default register;
