import Modal from "@/component/modal";
import styles from "./modal-termsmodal.module.css";
import text from "../../../text.json";
import { LangContext } from "@/context/lang.context";
import { useContext, useEffect, useState } from "react";
import { termsContent } from "@/api/fetch";
import TermsContent from "./content";

interface Props {
  rsp?: string;
  isShow?: boolean;
  selected: "terms" | "privacy";
  onCloseClick: () => void;
}

export default function TermsModal({
  rsp = "",
  isShow,
  selected,
  onCloseClick,
}: Props) {
  const textObj = Object(text);
  const {
    state: { lang },
  } = useContext(LangContext);

  const [content, setContent] = useState<string>("");

  const getData = async (type: "terms" | "privacy", lang: string) => {
    const res = await termsContent(type, lang);
    res.success && res.data && setContent(res.data?.content);
  };

  useEffect(() => {
    getData(selected, lang);
  }, [selected, lang]);

  return (
    <Modal rsp={rsp} isShow={isShow} onCloseClick={onCloseClick}>
      <div>{textObj.footer[selected].title[lang]}</div>
      <div className={styles.contentWrapper}>
        <div>
          <TermsContent selected={selected} />
        </div>
      </div>
    </Modal>
  );
}