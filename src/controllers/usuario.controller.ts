export const getAll = (req: any, res: any) => {
    //res.send("Lista de Productos");
    res.status(200).json({message: "Hola Usuario"});
}

export const getNall = (req: any, res: any) => {
    //res.send("Lista de Productos");
    res.status(200).json({message: "No reconocido"});
}
export const getGall = (req: any, res: any) => {
    const usuarios = [
        { id: 1, nombre: "Juan Pérez", email: "juan@example.com" },
        { id: 2, nombre: "Ana García", email: "ana@example.com" },
        { id: 3, nombre: "Carlos López", email: "carlos@example.com" }
    ];
    
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(usuarios, null, 2));
};
