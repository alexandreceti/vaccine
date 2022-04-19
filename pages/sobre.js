import React from 'react';

function Sobre(props) {
  return (
    <div className='content'>
      <section className="hero is-info">
        <div className="hero-body">
          <p className="title">
            <i className="fa-solid fa-syringe"></i> Vanicação contra Covid no estado de Minas Gerais
          </p>
          <p className="subtitle">
            Projeto desenvolvido em React JS
          </p>
        </div>
      </section>
      <section className='content'>
      <br />
      <p>
      Este aplicativo contém dados abertos do site <a href="https://coronavirus.saude.mg.gov.br/dadosabertos" target="_blank" rel="noopener noreferrer">https://coronavirus.saude.mg.gov.br/dadosabertos</a>. Os dados que compõem essa aplicação são de domínio público. Para informações precisas em tempo real, acesse o portal da secretaria de saúde de Minas Gerais.
      </p>
    <h3 className='title is-4'>TRATAMENTO DE DADOS</h3>
    <p>
    A secretaria de saúde do estado de Minas Gerais disponibiliza, além das informações presentes nos painéis interativos, arquivos em formato XLSX e CSV para download. Desde o dia 02/06/2021, estão sendo disponibilizados seis arquivos relacionados a casos de COVID-19 em formato CSV.
    </p>

    <h3 className='title is-4'>DISTRIBUIÇÃO DE VACINAS</h3>

    <p>
Informações extraídas do Sistema SIES-MG com as doses enviadas pelo Ministério da Saúde, encaminhadas às Unidades Regionais de Saúde e às Unidades Regionais de Saúde aos municípios mineiros. Sujeito a alterações. Atualizado diariamente em formato XSLX no site e semanalmente em formato aberto não proprietário nesta página.      </p>
      <br />
      <a href="https://coronavirus.saude.mg.gov.br/dadosabertos" target="_blank" rel="noopener noreferrer">https://coronavirus.saude.mg.gov.br/dadosabertos</a>

      </section>
    </div>
  );
}

export default Sobre;