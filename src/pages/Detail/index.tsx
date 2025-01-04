import {NavBar} from "antd-mobile";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useState, useEffect} from "react";
import {DetailDataType, fetchDetailAPI} from "@/apis/detail.ts";

const Detail = () => {
  const [detail, setDetail] = useState<DetailDataType | null >(null);

  const[params] = useSearchParams()
  const id =  params.get('id')
  useEffect(() => {
    const getDetail = async () => {
      try {
        const response = await fetchDetailAPI( id! )
        setDetail(response.data.data)
      } catch (e) {
        throw new Error('Error getting detail'+e)
      }
    }
    getDetail()

  }, [id]);
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  }

  if (!detail) {
    return <div> this is loading </div>
  }

  return (
      <div>
        <NavBar onBack={back}> </NavBar>
        <div
            dangerouslySetInnerHTML={{
          __html: detail?.content
        }}></div>
      </div>)
}

export default Detail