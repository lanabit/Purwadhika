import styled from "styled-components"

function Button({text, page}) {
  const StyledButton = styled.button`
    background-color: ${page === 'login'? 'orange' : 'blue'};
    font-size: 32px;
    color: whitel
  `
  return (
    <>
    <StyledButton>
      {text}
    </StyledButton>
    </>
  )
}

export default Button;