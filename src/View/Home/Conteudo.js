import React from 'react';
import document from '../../Main/img/document.png'

export default function Login (){
    return (
        <section>
            <div className="conteudoHome">
                <div className="acesso">
                    <h2>Acesse o Iris</h2>
                   <div className="avaliacoes">
                    <img className="notas" src={document} alt="notas"></img>
                    <p>Publique suas avaliações</p>
                    </div>
                    <p>Tire duvidas de estabelecimentos na sua cidade</p>
                    <p> Salve lugares para conhecer </p>
                    <a href="/login"><button>Inscreva-se </button></a>
                </div>

                <div className="destaques">
                    <h2>Destaques para sua semana</h2>
                    <p>Restaurantes</p>
                    
                    <p>Teatros</p>
                    <p>Museus</p>
                    <p>Festas</p>
                    <p>Cinemas</p>
                </div>


            </div>
        </section>

    )
}