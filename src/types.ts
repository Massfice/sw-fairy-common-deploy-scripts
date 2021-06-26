type InvokeFunction = () => void;
type RegisterFunction = (name: string, invokeFunction: InvokeFunction) => void;

export { InvokeFunction, RegisterFunction };
