import { ComponentType } from 'react'

const withBackdrop = (WrappedComponent: ComponentType) => {
  const ComponentWithBackdrop = (props: any) => {
    return (
      <div className='fixed inset-0 flex p-5 justify-center items-center z-20 bg-[#16040467]'>
        <WrappedComponent {...props} />
      </div>
    )
  }

  return ComponentWithBackdrop
}

export default withBackdrop
