import { Layout } from './../components/layout'

export default function Home() {
  return (
    <Layout page="home" title="Home | Alex Devero">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-7 col-xl-6">
            <h1 className="mb-2">Alex Devero</h1>

            <p>Entrepreneur, designer and developer from Czech Republic.</p>
          </div>
        </div>

        <style jsx>{``}</style>
      </div>
    </Layout>
  )
}
