export const kidsIsNotEmpty = (kids: any): {label: string, value: []} | false => {
    const kidsKeys = Object.keys(kids);
    if (!kidsKeys.length) {
        return false;
    }
    const [firstKey] = kidsKeys;
    return (kids[firstKey] && kids[firstKey].records && {label: firstKey, value: kids[firstKey].records}) || false;
};
