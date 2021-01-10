(async () => {
    const ibgeService = require('./ibgeService');
    const ufs = await ibgeService.getUFs();
    console.log(ufs)
})();