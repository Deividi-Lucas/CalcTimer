import { StyleInput } from './style'

export const Input = props => {
  return (
    <>
      <label>Digite o ano: </label>
      <StyleInput
        placeholder={props.placeholder}
        type={props.type}
        onChange={props.onChange}
        maxLength={12}
      />
    </>
  )
}
