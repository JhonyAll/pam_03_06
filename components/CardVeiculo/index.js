import { ImageBackground, Text} from 'react-native';

import estilo from './estilo';

export default function CardVeiculo({props, veiculo}) {
  const irParaDetalhes = () => { props.navigation.navigate("Detalhes",veiculo); };
  const img = veiculo.fotos[0];
  return (
      <ImageBackground 
        style={estilo.container}
        source={`../../assets/img_veiculos/${img}`}
        resizeMode='repeat'
        imageStyle={{borderRadius: 10}}
        onTouchEnd={irParaDetalhes}
      >
        <Text style={estilo.titulo}>{veiculo.fabricante} {veiculo.modelo}</Text>
        <Text style={estilo.valor}>{`R$ ${veiculo.preco}`}</Text>
      </ImageBackground>
  );
}