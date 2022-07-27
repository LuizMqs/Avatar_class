function Avatar() {
    this.posiçãoX = 0
    this.posiçãoY = 0
    this.bolsa_moedas = 0
}

Avatar.prototype.get_posiçãoX = function () {
    return this.posiçãoX;
};

Avatar.prototype.get_posiçãoY = function () {
    return this.posiçãoY;
};

Avatar.prototype.get_bolsa_moedas = function () {
    return this.bolsa_moedas;
};

Avatar.prototype.forward = function () {
    this.posiçãoY++
};

Avatar.prototype.back = function () {
    if(this.posiçãoY >= 0) {
        this.posiçãoY--
    }
};

Avatar.prototype.rigth = function () {
    this.posiçãoX++
};

Avatar.prototype.left = function () {
    if(this.posiçãoX >= 0) {
        this.posiçãoX--
    }
};

Avatar.prototype.add_bolsa = function () {
    this.bolsa_moedas++
};