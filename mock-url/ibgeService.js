//ibgeService
module.exports.getUFs = async () => {
    const axios = require('axios');
    const result = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
    return result.data;
}


