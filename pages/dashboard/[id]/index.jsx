import { LANDING_DATA } from "../../../components/constants";
import Header from "../../../components/Header";

const View = ({ page }) => {
  return (
    <div className="flex flex-col flex-grow">
      <Header />
      <div className="flex-grow px-6 py-20 bg-white">
        {page ? (
          <div className="mx-auto max-w-screen-xl">
            <h4 className="title-font font-bold text-xl text-gray-900 mb-2">
              {page.title}
            </h4>
            <p className="leading-relaxed font-normal mb-6">
              {page.description}
            </p>
            <img
              className="w-full object-cover"
              src={page.image}
              alt={page.title}
            />
          </div>
        ) : (
          <div className="h-full flex items-center justify-center">
            Loading...
          </div>
        )}
      </div>
    </div>
  );
};

export default View;

export async function getStaticPaths() {
  return {
    paths: LANDING_DATA.map((page) => ({
      params: { id: page.id },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const page = LANDING_DATA.find((page) => page?.id === params.id);

  return { props: { page } };
}
