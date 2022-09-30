import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition, Switch } from "@headlessui/react";
import { getCookie, setCookies } from "cookies-next";
import { HiArrowLeft } from "react-icons/hi";
import Link from "next/link";
import { useRouter } from "next/router";

type ModalProps = {
  state: boolean;
  loading: boolean;
  setIsOpen: (state: boolean) => void;
  isOpen: boolean;
};

function Cookies({ state, loading, setIsOpen, isOpen }: ModalProps) {
  const router = useRouter();
  const [loadingState, setLoadingState] = useState(loading);
  const [firstVisit, setFirstVisit] = useState(getCookie("firstVisit") ?? true);

  const [functionalCookieState, setFunctionalCookieState] = useState(false);
  const [analyticalCookieState, setAnalyticalCookieState] = useState(false);

  useEffect(() => {
    handleToggle(firstVisit ? true : false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  function handleSetFunctionalCookies(state: boolean) {
    setFunctionalCookieState(state);
  }
  function handleAnalyticalCookies(state: boolean) {
    setAnalyticalCookieState(state);
  }

  const handleSaveCookies = (functionalCookies: boolean, analyticalCookies: boolean) => {
    setLoadingState(true);
    setCookies("functionalCookies", functionalCookies);
    setCookies("analyticalCookies", analyticalCookies);
    setCookies("firstVisit", false);
  };

  function handleToggle(state: boolean) {
    setIsOpen(state);
  }

  useEffect(() => {
    if (loadingState) {
      setTimeout(() => {
        handleToggle(false);
        setLoadingState(false);
      }, Math.floor(Math.random() * (1000 - 300)));
      router.reload();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingState, router]);

  return (
    <div className="relative">
      <div className="fixed bottom-0 z-20"></div>
      <Transition show={isOpen} as={Fragment}>
        <Dialog className="z-20 flex flex-col relative " open={isOpen} onClose={() => handleToggle(false)}>
          <div className="fixed inset-0   bg-black/30" aria-hidden="true" />
          <div className=" fixed   inset-0 flex items-center h-full   justify-center  p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="bg-white  w-full max-h-screen overflow-y-scroll    md:w-1/2 h-auto rounded-md shadow-md flex-col pt-6 md:justify-around flex gap-6 lg:gap-12 text-left p-6 lg:p-12 lg:w-2/5 text-dark_green">
                {firstVisit ? (
                  <div className="flex flex-grow flex-col justify-around gap-6 h-full  w-full">
                    <Dialog.Title className="font-bold  text-2xl lg:text-4xl">Informasjonskapsler</Dialog.Title>
                    <Dialog.Description as="div" className="text-sm lg:text-base">
                      <p>
                        Vi benytter informasjonskapsler for å kunne se hvordan du bruker nettsiden vår. Ved å akseptere
                        tillater du vår bruk av informasjonskapsler.
                      </p>
                      <Link href="/personvern" passHref>
                        <a className="link underline hover:text-blue">Personvernerklæring</a>
                      </Link>
                    </Dialog.Description>
                    <div className="flex  flex-col lg:flex-row gap-6">
                      <button
                        className=" mx-auto w-full text-white  bg-primary rounded-md  p-6  hover:bg-opacity-20 transition-all"
                        onClick={() => handleSaveCookies(false, false)}
                      >
                        Avvis Alle
                      </button>
                      <button
                        className=" mx-auto w-full text-white  bg-primary rounded-md  p-6  hover:bg-opacity-20 transition-all"
                        onClick={() => handleSaveCookies(true, true)}
                      >
                        Godta Alle
                      </button>
                    </div>
                    <button
                      className=" mx-auto text-primary underline  w-full p-6 rounded-md   hover:opacity-20  transition-all"
                      onClick={() => setFirstVisit(false)}
                    >
                      Instillinger
                    </button>
                  </div>
                ) : (
                  <>
                    {loadingState ? (
                      <Spinner />
                    ) : (
                      <>
                        <Dialog.Title className="font-bold text-2xl lg:text-4xl">
                          Administrer informasjonskapsler
                        </Dialog.Title>
                        <Dialog.Description as="div" className="flex flex-col gap-6 lg:gap-12 text-sm lg:text-base">
                          <CookieItem
                            cookieKey="functionalCookies"
                            handler={handleSetFunctionalCookies}
                            title="Funksjonelle informasjonskapsler (forbedring av nettsiden)"
                            description="For å øke brukervennligheten på siden bruker vi funksjonalitetscookies. Disse husker valg du har foretatt deg på nettsiden - som for eksempel artikler du har lest eller andre preferanser du har lagt igjen på siden."
                          />
                          <CookieItem
                            cookieKey="analyticalCookies"
                            handler={handleAnalyticalCookies}
                            title="Analytiske informasjonskapsler "
                            description="Som en viktig del av arbeidet med å lage et brukervennlig nettsted, ser vi på brukermønsteret til de som besøker nettstedet. For å analysere informasjonen, bruker vi analyseverktøyet Google Analytics. Google Analytics bruker cookies, som registrerer brukernes IP-adresse, og som gir informasjon om den enkelte brukers bevegelser på nett."
                          />
                          <CookieItem locked title="Nødvending informasjonskapsler (tilgang til nettsiden)" />
                        </Dialog.Description>
                        <div className="flex">
                          <button onClick={() => setFirstVisit(true)}>
                            <HiArrowLeft size={30} className="fill-primary opacity-20 hover:opacity-100" />
                          </button>
                          <button
                            className="button-primary p-6 w-full mx-12 rounded-md text-white bg-primary    hover:bg-opacity-20 hover:ring-0 transition-all"
                            onClick={() => handleSaveCookies(functionalCookieState, analyticalCookieState)}
                          >
                            Lagre
                          </button>
                        </div>
                      </>
                    )}
                  </>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

type CookieItemProps = {
  title: string;
  description?: string;
  locked?: boolean;
  cookieKey?: string;
  handler?: any;
};

const CookieItem = ({ title, description, locked, handler, cookieKey }: CookieItemProps) => {
  const titleSubText = title.match(/\((.*?)\)/g);
  const titleMainText = title.replace(/\((.*?)\)/g, "");

  function handleHandler(state: boolean) {
    if (handler) {
      handler(state);
    }
  }

  return (
    <div>
      <div className="flex flex-row gap-2 lg:gap-4 justify-between">
        <p className="font-bold">
          {titleMainText} <span className="font-light">{titleSubText}</span>
        </p>
        <div className="w-auto flex-1 rounded-full overflow-hidden bg-primary opacity-20 my-auto h-0.5"></div>
        <ToggleSwitch
          cookieKey={cookieKey}
          handler={handleHandler}
          description={description ? description : title}
          locked={locked}
        />
      </div>
      <p className="pt-4 w-full lg:w-4/5">{description}</p>
    </div>
  );
};

type ToggleSwitchProps = {
  description: string;
  locked?: boolean;
  handler: any;
  cookieKey?: string;
};

function ToggleSwitch({ description, locked, handler, cookieKey }: ToggleSwitchProps) {
  const cookie = cookieKey ? getCookie(cookieKey) : true;
  const [enabled, setEnabled] = useState(locked ? false : cookie);

  useEffect(() => {
    handler(enabled);
  }, [enabled, handler]);

  return (
    <Switch
      checked={locked ? true : enabled === true}
      disabled={locked ? true : false}
      onChange={setEnabled}
      className={`${enabled ? "bg-primary" : "bg-primary opacity-10"} relative ${
        locked && "opacity-10"
      } inline-flex flex-shrink-0  h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Enable {description}</span>
      <span
        className={`${
          enabled ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transition-all  transform rounded-full bg-white`}
      />
    </Switch>
  );
}

export const Spinner = () => {
  return (
    <div className="flex flex-col-reverse gap-2 m-auto">
      <p className="font-bold mx-auto">Laster...</p>
      <div className="bg-accent m-auto shadow-md bg-clip-content animate-spin flex h-12 w-12 rounded-full">
        <div className=" m-auto h-10   w-10 flex rounded-full bg-primary "></div>
        <div className="h-6 w-6 absolute translate-x-6 m-auto bg-primary   "></div>
      </div>
    </div>
  );
};

export default Cookies;
