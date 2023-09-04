import './styles.css'


type Props = {
    onNextPage: () => void,
}

export default function LoadingMore({onNextPage}: Props) {

    return(
        <div onClick={() => onNextPage()} className="dsc-btn-next-page" >Carregar mais</div>
    )
}