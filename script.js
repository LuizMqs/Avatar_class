class Avatar {
    constructor() {
        this.posiçãoX = 0
        this.posiçãoY = 0
        this.bolsa_moedas = 0
        this.pontos_vida = 40
        this.pontos_dano = 1
    }

    get_attack() {
        if(this.pontos_vida <= 0) {
            return
        }
        return this.pontos_dano
    }

    get_attack_recebido(dano) {
        if(this.pontos_vida <= 0) {
            return
        }
        this.pontos_vida = this.pontos_vida - dano
    }

    get_vidadoperucas() {
        return this.pontos_vida
    }

    get_posiçãoX() {
        if(this.pontos_vida <= 0) {
            return
        }
        return this.posiçãoX
    }

    get_posiçãoY() {
        if(this.pontos_vida <= 0) {
            return
        }
        return this.posiçãoY
    }

    get_bolsa_moedas() {
        if(this.pontos_vida <= 0) {
            return
        }
        return this.bolsa_moedas
    }

    forward() {
        if(this.pontos_vida <= 0) {
            return
        }
        this.posiçãoY++
    }

    back() {
        if(this.pontos_vida <= 0) {
            return
        }
        if(this.posiçãoY >= 0) {
            this.posiçãoY--
        }
    }

    rigth() {
        if(this.pontos_vida <= 0) {
            return
        }
        this.posiçãoX++
    }

    left() {
        if(this.pontos_vida <= 0) {
            return
        }
        if(this.posiçãoX >= 0) {
            this.posiçãoX--
        }
    }

    add_moeda() {
        if(this.pontos_vida <= 0) {
            return
        }
        this.bolsa_moedas++
    }
}

class Cowboy extends Avatar {
    constructor() {
        super()
        this.municao = 10
        this.pontos_dano = 2
    }

    get_attack() {
        if(this.pontos_vida <= 0) {
            return
        }

        if(this.municao == 0) {
            return
        }

        this.municao--

        return this.pontos_dano
    }

    get_encontrou_municao() {
        this.municao++
    }
}

class Mago extends Avatar {
    constructor() {
        super()
        this.feiticos = 10
        this.pontos_dano = 3
        this.recuperar_feiticos = 0
    }

    get_attack() {
        if(this.pontos_vida <= 0) {
            return
        }

        if(this.feiticos == 0) {
            if(!this.recuperar_feiticos) {
                this.recuperar_feiticos = setTimeout(() => {
                    this.feiticos = 10
                }, 10000)
            }
            return
        }

        this.feiticos--

        return this.pontos_dano
    }
}
