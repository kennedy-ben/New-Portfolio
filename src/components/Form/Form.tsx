import { Container, ContainerSucces } from './styles'
import { useForm } from '@formspree/react'
import { toast, ToastContainer } from 'react-toastify'
import { useEffect} from 'react'

export function Form() {
  const [state, handleSubmit] = useForm('xknkpqry')



  
  useEffect(() => {
    if (state.succeeded) {
      toast.success('Email successfully sent!', {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'succeeded',
      })
    }
  })
  if (state.succeeded) {
    return (
      <ContainerSucces>
        <h3>Thanks for getting in touch!</h3>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          Back to the top
        </button>
        <ToastContainer />
      </ContainerSucces>
    )
  }

  return (
    <Container>
      <h2>Get in touch using Email and Phone number</h2>
      <form onSubmit={handleSubmit}>
      </form>
      <ToastContainer />
    </Container>
  )
}
