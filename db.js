const db = require('./conn');
var schemaName = 'sesi6';

add = async (data) => {
    try {
        // console.log('data: ', data);
        const insertData = `INSERT INTO ${schemaName}.students (
            student_name, math, indonesian, natural_sciences, score, grade
        ) values (
            $1, $2, $3, $4, $5, $6
        ) returning *`;

        const values = [
            data.nama, data.matematika, data.bahasa_indonesia, data.ipa, data.score, data.grade
        ];

        const { rows } = await db.query(insertData, values);
        // console.log(rows);
        return rows[0];
    } catch (error) {
        throw error;
    }
}

module.exports = {
    add
};