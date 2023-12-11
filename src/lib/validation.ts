export const isEmail = (value: string) => {
    if (
        !/^(([A-Za-z0-9-_+]+(\.[A-Za-z0-9-_+]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
            value
        ) ||
        value.includes("--")
    ) {
        return false;
    }
    return true;
};
