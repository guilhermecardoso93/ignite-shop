import { GetServerSideProps } from "next";
import Link from "next/link";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra Efetuada</h1>
      <ImageContainer></ImageContainer>

      <p>
        Uhuuu! <strong>Guilherme Cardoso</strong>, sua{" "}
        <strong>camisa Beyond Limits</strong> já está a caminho da sua casa.
      </p>
      <Link href='/'>
        Voltar ao catálogo!
      </Link>
    </SuccessContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async ({query}) => {
  const sessionId = String(query.session_id);
  return {
    props :{

    }
  }
}