import {getConnection} from "./../database/database";

const getLanguages = async(request, response)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, name, programers FROM programadores");
        response.json(result);
    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
};

const getLanguageId = async(request, response)=>{
    try {
        const {id}=request.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id, name, programers FROM programadores WHERE id = ?",id);
        response.json(result);
    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
};

const addLanguage = async (request, response) => {
    try {
        const {name, programers} = request.body;
        //Validación de campos
        if(name === undefined || programers===undefined) {
            response.status(404).json({message:"Bad Request. Please fill all fields."});
        }

        const language ={
            name, programers
        };
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO programadores SET ?",language);
        response.json({message:"Lenguage added successfully"});
    } catch (error) {
        response.status(500);
        response.send(error.message);
    }


};

const updateLanguageId = async(request, response)=>{
    try {
        const {id}=request.params;
        const {name, programers} = request.body;
        //Validación de campos
        if(name === undefined || programers===undefined) {
            response.status(404).json({message:"Bad Request. Please fill all fields."});
        }
        const language = {id,name,programers}
        const connection = await getConnection();
        const result = await connection.query("UPDATE programadores SET ? WHERE id = ?",[language,id]);
        response.json({message:"Language updated successfully"});
    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
};

const deleteLanguageId = async(request, response)=>{
    try {
        const {id}=request.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM programadores WHERE id = ?",id);
        response.json({message:"Language deleted successfully"});
    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
};

export const methods = {
    getLanguages,
    getLanguageId,
    addLanguage,
    updateLanguageId,
    deleteLanguageId
};