import './Help.scss'
import strelocki from './Help-assets/ic_arrow_forward_24px.png'
import { ways } from './data'

function Helpes(Hell){
    return(
        <>
            <div className='Helpes'>
                <div>
                    <img src={Hell.img} alt="" />
                    <div>
                        <h3>{Hell.h3}</h3>
                        <p>{Hell.p}</p>
                    </div>
                    <div>
                        <a>Learn more</a>
                        <img src={strelocki} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default function Help(){
    return(
        <>
            <section className='background1'>
                <div>
                    <div className='help-absolut'>
                        <h2>What we do to help our client grow in digital era,</h2>
                    </div>
                    <div className='Help-div'>
                        <div className='left'>
                            <Helpes {...ways[0]}/>
                        </div>
                        <div>
                            <Helpes {...ways[1]}/>
                            <Helpes {...ways[2]}/>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}