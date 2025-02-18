export const getAll = (req: any, res: any) => {
    //res.send("Lista de Productos");
    res.status(200).json({message: "Hola Usuario"});
}

export const getNall = (req: any, res: any) => {
    //res.send("Lista de Productos");
    res.status(200).json({message: "No reconocido"});
}