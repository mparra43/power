export const colorCodeGenerator = () => {
    const letters = "0123456789ABCDEF";
    let colorCode = "#";
    for (let i = 0; i < 6; i++) {
        colorCode += letters[Math.floor(Math.random() * 16)];
    }
    return colorCode;
}

export const generateBackgroundColor =(count: number, alpha: number)=> {
    const pastelColors = [];

    for (let i = 0; i < count; i++) {
        const r = Math.floor(Math.random() * 256); 
        const g = Math.floor(Math.random() * 256); 
        const b = Math.floor(Math.random() * 256); 

        pastelColors.push(`rgba(${r}, ${g}, ${b}, ${alpha})`);
    }

    return pastelColors;
}