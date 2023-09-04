import ButtonPrimary from '../ButtonPrimary';
import './styles.css';


export default function DialogInfo() {
    return(
        <div className='dsc-dialog-background'>
            <div className='dsc-dialog-box'>
                <h2>Operação com Sucesso</h2>
                <ButtonPrimary text='Ok'/>
            </div>

        </div>
    )
}