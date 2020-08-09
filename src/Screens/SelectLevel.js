import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import DeviceInfo from 'react-native-device-info';
import { StyleSheet, View, Text, ScrollView, FlatList, TouchableOpacity, Image, Platform, Dimensions, AsyncStorage, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

//Scale
import { scale } from '../assets/scaling'

class SelectLevel extends Component {

    state = {
        index: null,
        mostraAviso: true,
        perguntasSuaves: [
            pergunta0 = "acampei.",
            pergunta1 = "acreditei no amor.",
            pergunta2 = "apareci em vídeo no YouTube.",
            pergunta3 = "apareci na tv.",
            pergunta4 = "apertei a campainha e saí correndo.",
            pergunta5 = "aprendi a andar de bicicleta.",
            pergunta6 = "arruinei as férias de alguém.",
            pergunta7 = "beijei um estranho.",
            pergunta8 = "brinquei de torta na cara.",
            pergunta9 = "caí da cama.",
            pergunta10 = "caí de moto e me ralei.",
            pergunta11 = "caí em um golpe de internet.",
            pergunta12 = "caí em um trote.",
            pergunta13 = "caí em uma pegadinha.",
            pergunta14 = "caí na balada.",
            pergunta15 = "caí porque estava olhando o celular.",
            pergunta16 = "cantei em público.",
            pergunta17 = "chamei alguém de brega.",
            pergunta18 = "chorei em público.",
            pergunta19 = "chorei em um show.",
            pergunta20 = "chorei no transporte público.",
            pergunta21 = "chorei ou flertei para me livrar de uma multa.",
            pergunta22 = "colei chiclete debaixo da mesa.",
            pergunta23 = "colei na prova.",
            pergunta24 = "coloquei a culpa no cachorro.",
            pergunta25 = "comecei a ver uma série só para ter assunto.",
            pergunta26 = "comi algo escondido para não dividir.",
            pergunta27 = "comi até passar mal.",
            pergunta28 = "comi jiló.",
            pergunta29 = "comi língua de boi.",
            pergunta30 = "comi pizza no café da manhã.",
            pergunta31 = "comi restos de comida da outra mesa.",
            pergunta32 = "comi sorvete com batata frita.",
            pergunta33 = "cortei o meu próprio cabelo.",
            pergunta34 = "costurei.",
            pergunta35 = "cozinhei algo ruim e ofereci para me vingar da pessoa.",
            pergunta36 = "cumprimentei alguém fingindo que sabia quem era.",
            pergunta37 = "dancei agarradinho.",
            pergunta38 = "dancei axé.",
            pergunta39 = "dancei funk no meu quarto sem ninguém ver.",
            pergunta40 = "dancei no palco de uma festa.",
            pergunta41 = "dei calote.",
            pergunta42 = "dei um soco em algo de vidro.",
            pergunta43 = "desmaiei",
            pergunta44 = "dirigi",
            pergunta45 = "disse adeus.",
            pergunta46 = "disse que amo alguém sem querer ou sem sentir.",
            pergunta47 = "dormi no cinema.",
            pergunta48 = "encontrei alguém famoso.",
            pergunta49 = "engoli algo que não era de comer.",
            pergunta50 = "entendi uma piada e ri de mentira.",
            pergunta51 = "entupi uma privada e não contei para ninguém.",
            pergunta52 = "enviei fotos das minhas fezes para alguém.",
            pergunta53 = "enviei uma carta de amor.",
            pergunta54 = "espirrei catarro em público.",
            pergunta55 = "estive acordado por dois dias seguidos.",
            pergunta56 = "experimentei comida de cachorro.",
            pergunta57 = "falei para alguma pessoa que ela tinha cecê.",
            pergunta58 = "fingi que estava falando no telefone.",
            pergunta59 = "fingi que falava outro idioma.",
            pergunta60 = "fingi que não vi alguém.",
            pergunta61 = "fiquei bêbado.",
            pergunta62 = "fiquei com o irmão de um amigo.",
            pergunta63 = "fiquei de recuperação.",
            pergunta64 = "fiquei mais de 2 dias sem tomar banho.",
            pergunta65 = "fiquei preso no elevador.",
            pergunta66 = "fiquei sem dormir por dois dias seguidos.",
            pergunta67 = "fiz alguém ir para o hospital.",
            pergunta68 = "fiz brigadeiro.",
            pergunta69 = "fiz brincadeiras evangélicas.",
            pergunta70 = "Pulei de bungee jumping.",
            pergunta71 = "fiz perguntas constrangedoras.",
            pergunta72 = "fiz perguntas para Siri.",
            pergunta73 = "fiz piercing ou tatuagem.",
            pergunta74 = "fiz uma aposta arriscada.",
            pergunta75 = "fiz uma fogueira.",
            pergunta76 = "fiz uma pergunta anônima porque tinha vergonha.",
            pergunta77 = "fiz uma viagem de carro de mais de 10 horas.",
            pergunta78 = "fritei um ovo.",
            pergunta79 = "fui à Bahia.",
            pergunta80 = "fui a um baile funk.",
            pergunta81 = "fui a um karaokê.",
            pergunta82 = "fui a um parque de diversões.",
            pergunta83 = "fui a um rodeio.",
            pergunta84 = "fui chamado de feio.",
            pergunta85 = "fui considerado o melhor em alguma coisa",
            pergunta86 = "fui considerado o pior em alguma coisa.",
            pergunta87 = "fui em um rodeio.",
            pergunta88 = "fui expulso de um bar.",
            pergunta89 = "fui o último a ser escolhido para alguma coisa.",
            pergunta90 = "fui pego no plágio ou colando.",
            pergunta91 = "fui perseguido por animais.",
            pergunta92 = "fui picado por uma abelha ou marimbondo.",
            pergunta93 = "fui queimado por uma água viva.",
            pergunta94 = "fui roubado.",
            pergunta95 = "ganhei um sorteio.",
            pergunta96 = "gostei de café.",
            pergunta97 = "gostei de uma música de Justin Bieber.",
            pergunta98 = "guardei chiclete para mascar depois.",
            pergunta99 = "ignorei um amigo no WhatsApp.",
            pergunta100 = "invadi uma casa.",
            pergunta101 = "joguei coisas pela sacada ou pela janela.",
            pergunta102 = "joguei jogos de guerra.",
            pergunta103 = "joguei ovo em alguém.",
            pergunta104 = "levei calote.",
            pergunta105 = "levei uma ovada.",
            pergunta106 = "li a Bíblia.",
            pergunta107 = "limpei um banheiro.",
            pergunta108 = "mastiguei gelo.",
            pergunta109 = "matei aula.",
            pergunta110 = "matei uma barata.",
            pergunta111 = "matei uma planta.",
            pergunta112 = "me afoguei.",
            pergunta113 = "me apaixonei à primeira vista.",
            pergunta114 = "me confessei na igreja.",
            pergunta115 = "me deparei com um ovo podre.",
            pergunta116 = "menti minha opinião para impressionar alguém.",
            pergunta117 = "menti no currículo.",
            pergunta118 = "menti para os meus pais.",
            pergunta119 = "menti que estava ocupado para não sair.",
            pergunta120 = "menti que uma comida estava boa.",
            pergunta121 = "mergulhei.",
            pergunta122 = "misturei água na bebida para render mais.",
            pergunta123 = "misturei água no pote de shampoo.",
            pergunta124 = "mostrei a bunda em público.",
            pergunta125 = "naveguei em um barco.",
            pergunta126 = "ouvi música Gospel.",
            pergunta127 = "parei de comer carne.",
            pergunta128 = "participei de um programa de auditório.",
            pergunta129 = "passei mal de tanto comer.",
            pergunta130 = "peguei carona de estranhos.",
            pergunta131 = "peguei comida ou bebida em festa e levei para casa.",
            pergunta132 = "peguei emprestado e não devolvi.",
            pergunta133 = "peidei em público.",
            pergunta134 = "pensei que eu sou a pessoa mais linda dessa roda.",
            pergunta135 = "perdi um animal de estimação.",
            pergunta136 = "perdi um brinquedo.",
            pergunta137 = "perdi um voo.",
            pergunta138 = "pintei uma parede.",
            pergunta139 = "planejei um discurso no banho.",
            pergunta140 = "plantei uma árvore.",
            pergunta141 = "pratiquei esportes.",
            pergunta142 = "procurei o meu nome no Google.",
            pergunta143 = "procurei perguntas para brincadeira na internet.",
            pergunta144 = "pulei a catraca para não pagar.",
            pergunta145 = "pulei Carnaval.",
            pergunta146 = "quebrei um dente.",
            pergunta147 = "quebrei um osso.",
            pergunta148 = "quebrei uma promessa.",
            pergunta149 = "raspei o cabelo.",
            pergunta150 = "rebolei até a boquinha da garrafa.",
            pergunta151 = "recebi flores.",
            pergunta152 = "reciclei.",
            pergunta153 = "segurei vela.",
            pergunta154 = "subi em uma árvore.",
            pergunta155 = "surfei.",
            pergunta156 = "tentei cortar meu cabelo e me arrependi.",
            pergunta157 = "tingi meu cabelo de uma cor bem forte.",
            pergunta158 = "tirei comida do lixo e comi.",
            pergunta159 = "tirei foto com alguém famoso.",
            pergunta160 = "tirei foto com roupas emprestadas.",
            pergunta161 = "tive catapora.",
            pergunta162 = "tive infecção de urina.",
            pergunta163 = "tive medo de dormir sozinho.",
            pergunta164 = "tive medo de ser flagrado pela polícia.",
            pergunta165 = "tive minhas redes sociais hackeadas.",
            pergunta166 = "tive piolho.",
            pergunta167 = "tive pulga.",
            pergunta168 = "tive um cachorro.",
            pergunta169 = "tive um gato.",
            pergunta170 = "tive uma câmera de fotos analógica.",
            pergunta171 = "tive uma cárie.",
            pergunta172 = "tive uma crise de riso em um momento sério.",
            pergunta173 = "tomei injeção no bumbum.",
            pergunta174 = "tomei leite azedo.",
            pergunta175 = "tomei na mamadeira depois de adulto.",
            pergunta176 = "treinei beijo de língua.",
            pergunta177 = "usei cueca/calcinha do avesso.",
            pergunta178 = "usei óculos sem lentes.",
            pergunta179 = "usei perguntas para de uma lista de perguntas",
            pergunta180 = "usei um alimento que passou da validade e depois todo mundo ficou com caganeira.",
            pergunta181 = "vi neve.",
            pergunta182 = "vi o mar.",
            pergunta183 = "vi o mar.",
            pergunta184 = "vi o sol nascer.",
            pergunta185 = "vi um animal selvagem.",
            pergunta186 = "vi um macaco ao vivo.",
            pergunta187 = "vi uma criatura extraterrestre.",
            pergunta188 = "viajei de avião.",
            pergunta189 = "virei uma noite estudando.",
            pergunta190 = "visitei um país diferente.",
            pergunta191 = "voei em um balão.",
            pergunta192 = "vomitei em um parque de diversões.",
            pergunta193 = "comprei seguidores.",
            pergunta194 = "pedi para amigos e familiares curtirem um post.",
            pergunta195 = "curti minha própria foto.",
            pergunta196 = "mandei mensagem errada.",
            pergunta197 = "me apaixonei por alguém da internet.",
            pergunta198 = "deletei uma publicação na rede social por não ter curtidas.",
            pergunta199 = "dei um-follow por recalque.",
            pergunta200 = "mandei indireta nas redes sociais.",
            pergunta201 = "me arrependi do meu nome de usuário.",
            pergunta202 = "me arrependi de um post.",
            pergunta203 = "postei fotos comprometedoras.",
            pergunta204 = "expus outra pessoa nas redes sociais.",
            pergunta205 = "fingi que tinha ganhado algo, mas na verdade comprei.",
            pergunta206 = "usei o Tinder ou app de paquera.",
            pergunta207 = "fiquei com alguém do Tinder.",
            pergunta208 = "tive um perfil falso.",
            pergunta209 = "me apaixonei à primeira vista.",
            pergunta210 = "tomei um spoiler no Youtube.",
            pergunta211 = "ganhei dinheiro com a internet.",
            pergunta212 = "me arrependi por me expor demais.",
            pergunta213 = "tive vergonha de postar alguma coisa.",
            pergunta214 = "fiz uma receita da internet que era péssima.",
            pergunta215 = "caí no gemidão do zap.",
            pergunta216 = "virei um meme.",
            pergunta217 = "fui hater.",
            pergunta218 = "abandonei uma série.",
            pergunta219 = "vi um filme mais do que 10 vezes.",
            pergunta220 = "tive um passado comprometedor na internet.",
            pergunta221 = "postei algo enquanto estava bêbado.",
            pergunta222 = "escondi minhas redes sociais da minha família.",
            pergunta223 = "tive medo de ser julgado(a).",
            pergunta224 = "segurei vela.",
            pergunta225 = "fiz um amigo segurar vela.",
            pergunta226 = "espero o micro-ondas apitar antes de abrir.",
            pergunta227 = "dancei em um pole dance.",
            pergunta228 = "fingi que falava em outro idioma.",
            pergunta229 = "fingi que não era comigo.",
            pergunta230 = "fingi que eu era irmão de um amigo.",
            pergunta231 = "comprei coisas falsificadas.",
            pergunta232 = "saí de pijama.",
            pergunta233 = "usei maquiagem vencida.",
            pergunta234 = "comprei um produto só porque um blogueiro indicou.",
            pergunta235 = "fui a um programa de auditório.",
            pergunta236 = "esqueci alguém muito importante.",
            pergunta237 = "fui rancoroso.",
            pergunta238 = "fiz meu mapa astral.",
            pergunta239 = "desisti de um crush por causa do signo dele.",
            pergunta240 = "fiz detox digital.",
            pergunta241 = "meditei.",
            pergunta242 = "usei aliança.",
            pergunta243 = "brinquei de verdade ou desafio com perguntas quentes.",
            pergunta244 = "apaguei meu histórico com medo de alguém ver.",
            pergunta245 = "usei o WiFi do vizinho.",
            pergunta246 = "briguei pelos comentários.",
            pergunta247 = "desisto de um projeto.",
            pergunta248 = "me arrependi de algo que publiquei.",
            pergunta249 = "chorei lendo comentários.",
            pergunta250 = "denunciei alguém na internet.",
            pergunta251 = "criei um perfil só para amigos.",
            pergunta252 = "fui a uma exposição.",
            pergunta253 = "chorei lendo um livro.",
            pergunta254 = "enviei um cartão postal.",
            pergunta255 = "discuti por WhatsApp.",
            pergunta256 = "terminei um relacioname."
        ],
        perguntasOusadas: [
            pergunta0 = "TESTE DO OUSADAS"
        ],
        perguntasMistas: [
            pergunta0 = "TESTE DO MISTAS"
        ],
        pergunta: '',
        iphoneX: false
    }

    componentDidMount() {
        this.setState({ iphoneX: this.isIphoneX() }, function () {
            console.log("É IPHONE X OU SUPERIOR? " + this.state.iphoneX)
        })
    }

    isIphoneX() {
        let iphone = DeviceInfo.getModel();
        console.log("QUAL IPHONE É? " + iphone)
        if (iphone == "iPhone X" || iphone == "iPhone XS" || iphone == "iPhone XS Max" || iphone == "iPhone 11 Pro Max" || iphone == "iPhone XR"
            || iphone == "iPhone 11 Pro" || iphone == "iPhone 11") {
            return true;
        } else {
            return false;
        }
    }

    render() {
        return (
            <>
                <ScrollView style={{
                    backgroundColor: '#c3c3c3'
                }}>
                    <View style={{ marginTop: this.state.iphoneX ? scale(50) : scale(30), marginLeft: scale(20) }}>
                        <TouchableOpacity onPress={() => Actions.pop()}>
                            <Icon name="chevron-left" size={30} color='#ff8040' />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.Container}>
                        <View style={{ borderRadius: scale(10), padding: scale(1), backgroundColor: '#000', marginTop: scale(20) }}>
                            <View style={{ borderRadius: scale(10), width: scale(320), borderWidth: scale(2), borderColor: '#ff8040', padding: scale(10), alignItems: 'center', backgroundColor: '#c3c3c3' }}>
                                <Image source={require('../assets/img/suave.png')} style={{ width: scale(90), marginTop: scale(-15) }} resizeMode="contain" />
                                <Text style={{ color: '#000', textAlign: 'center', width: scale(280), fontWeight: '600' }}>Bora começar os jogos com perguntas
                                                                                 bem suaves para o ínico da brincadeira.</Text>
                                <TouchableOpacity onPress={() => Actions.askScreen({ perguntas: this.state.perguntasSuaves })} style={{ marginTop: scale(20), backgroundColor: '#ff8040', borderRadius: scale(20), borderColor: '#000', borderWidth: scale(1.2), height: scale(30), width: scale(250), alignItems: 'center' }}>
                                    <Text style={{ marginTop: scale(3), color: '#000', fontFamily: 'Arial', fontWeight: 'bold', fontSize: scale(20) }}> JOGAR </Text>
                                </TouchableOpacity>
                            </View>
                        </View>


                        <View style={{ borderRadius: scale(10), padding: scale(1), backgroundColor: '#000', marginTop: scale(15) }}>
                            <View style={{ borderRadius: scale(10), width: scale(320), borderWidth: scale(2), borderColor: '#ff8040', padding: scale(10), backgroundColor: '#c3c3c3' }}>
                                <Image source={require('../assets/img/+18.png')} style={{ width: scale(30), marginTop: scale(-20), marginLeft: scale(270), position: 'absolute', zIndex: 3, }} resizeMode="contain" />
                                <View style={{ alignItems: 'center' }}>
                                    <Image source={require('../assets/img/ousado.png')} style={{ width: scale(100), marginTop: scale(-15) }} resizeMode="contain" />
                                    <Text style={{ color: '#000', textAlign: 'center', width: scale(280), fontWeight: '600' }}>Hora de apimentar a brincadeira,
com perguntas mais pessoais e ousadas.</Text>
                                    <TouchableOpacity onPress={() => Actions.askScreen({ perguntas: this.state.perguntasOusadas })} style={{ marginTop: scale(20), backgroundColor: '#ff8040', borderRadius: scale(20), borderColor: '#000', borderWidth: scale(1.2), height: scale(30), width: scale(250), alignItems: 'center' }}>
                                        <Text style={{ marginTop: scale(3), color: '#000', fontFamily: 'Arial', fontWeight: 'bold', fontSize: scale(20) }}> JOGAR </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>



                        <View style={{ borderRadius: scale(10), padding: scale(1), backgroundColor: '#000', marginTop: scale(15) }}>
                            <View style={{ borderRadius: scale(10), width: scale(320), borderWidth: scale(2), borderColor: '#ff8040', padding: scale(10), backgroundColor: '#c3c3c3' }}>
                                <Image source={require('../assets/img/+18.png')} style={{ width: scale(30), marginTop: scale(-20), marginLeft: scale(270), position: 'absolute', zIndex: 3, }} resizeMode="contain" />
                                <View style={{ alignItems: 'center' }}>
                                    <Image source={require('../assets/img/misto.png')} style={{ width: scale(100), marginTop: scale(-15) }} resizeMode="contain" />
                                    <Text style={{ color: '#000', textAlign: 'center', width: scale(280), fontWeight: '600' }}>Uma grande mistura, cai pergunta de tudo,
do suave ao ousado em um toque.</Text>
                                    <TouchableOpacity onPress={() => Actions.askScreen({ perguntas: this.state.perguntasMistas })} style={{ marginTop: scale(20), backgroundColor: '#ff8040', borderRadius: scale(20), borderColor: '#000', borderWidth: scale(1.2), height: scale(30), width: scale(250), alignItems: 'center' }}>
                                        <Text style={{ marginTop: scale(3), color: '#000', fontFamily: 'Arial', fontWeight: 'bold', fontSize: scale(20) }}> JOGAR </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>






                    </View >
                </ScrollView>
                <View style={{ backgroundColor: '#fff', width: 300, height: scale(100) }} />
            </>
        );
    }
}


const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#c3c3c3',
        position: 'relative',
        zIndex: 0,
        alignItems: 'center'
    }
});

export default SelectLevel;