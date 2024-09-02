import { CartListProvider } from '@context/CartListContext'

interface ProvidersProps {
  children: React.ReactNode
}

const Providers: React.FC<ProvidersProps> = ({ children }) => (
  <CartListProvider>{children}</CartListProvider>
)

export default Providers
