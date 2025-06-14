import { Btn } from "../btns";
import { useToggle } from "react-use";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ANodeInfo from "./components/ANodeInfo";
import ACommonNodes from "./components/ACommonNodes";
import AAddNewNodes from "./components/AAddNewNodes";
import backendApi from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import AUnbind from "./components/AUnbind";
import { cn } from "@nextui-org/react";
import { formatNumber, sortIp } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuthContext } from "@/app/context/AuthContext";

const ANodes = () => {
  const [isOpen, setOpenAddNode] = useToggle(false);
  const [unbindInfo, setUnbingInfo] = useState<string | undefined>("");
  const [selectedType, setSelectedType] = useState("");
  const addRef = useRef<Nodes.AddType>(null);
  const [nodeInfo, setNodeInfo] = useState<Nodes.NodeInfoList>();
  const r = useRouter()
  const searchParams = useSearchParams();
  const params = useMemo(() => new URLSearchParams(searchParams.toString()), [searchParams]);

  const ac = useAuthContext();
  const nId = params.get("nId") || ''
  const isType = params.get("type")


  console.log('isTypeisType', !isType);





  const title =
    nId && !unbindInfo
      ? "Node Details"
      : isOpen
        ? "Add New Node"
        : unbindInfo
          ? "Delete"
          : "All Nodes";

  const { data, isFetching, refetch } = useQuery({
    queryKey: ["NodeList"],
    enabled: true,
    refetchOnWindowFocus: true,
    queryFn: async ({ pageParam: pageNum }) => {
      const pageSize = 10;
      const pageParams = { pageSize, pageNum };
      const data = await backendApi.getNodeList();

      const list = data.map((item) => {
        return {
          nodeType: item.nodeType,
          deviceName: item.nodeName,
          icon: (
            <img
              src={`./${item.nodeType}.png`}
              alt={`${item.nodeType}`}
              className="w-[135px] h-[130px] smd:w-[104px] smd:h-[100px]"
            />
          ),
          nodeUUID: item.nodeUUID,
          when: "Today",
          experience: (
            <>
              <label className="text-[#00E42A] text-2xl font-semibold leading-6">
                +{formatNumber(Number(item.todayRewards) || 0)}
              </label>
              <label className="ml-[.375rem]">Jades</label>
            </>
          ),
          status: item.online,
          nodeId: item.nodeId,
        };
      });
      return list;
    },
  });



  const updateURL = (key: string, value: string) => {
    params.set(key, value);
    r.push(`?${params.toString()}`);

  };

  const handleToggleNodeInfo = (e: EdgeNodeMode.NodeType) => {
    if (isFetching) return
    params.delete('chooseType')
    updateURL('type', 'detail')
    updateURL('nId', `${e.nodeUUID}`)
    setOpenAddNode(false);
  }

  useEffect(() => {

    const showAdd = params.get("type") === 'add';
    const showDetail = params.get("type") === 'detail';
    const showDel = params.get("type") === 'del';
    const showLink = params.get("type") === 'link';
    const type = params.get("chooseType");


    const obj: { [key: 'box' | 'x86' | string]: string } = {
      box: 'Hardware',
      x86: 'Software'
    }

    if (showAdd) {
      setOpenAddNode(showAdd);
      updateURL('type', 'add')
    } else if (showDetail && nId) {
      setUnbingInfo('')
      updateURL('type', 'detail')
    } else if (showDel && nId) {
      setUnbingInfo(nId)
      updateURL('type', 'del')
    } else if (showLink) {
      updateURL('type', 'link')
    } else {
      closeAll()
    }
    if (type) {
      setSelectedType(obj[type]);
    }
    else {
      addRef.current?.switchTo();
      refetch()
      setSelectedType('');
    }
  }, [nId, searchParams, params]);


  const closeAll = () => {
    addRef.current?.switchTo();
    setUnbingInfo('')
    setSelectedType("");
    setOpenAddNode(false);
    params.delete('type')
    params.delete('chooseType')
    params.delete('nId')
    r.push(`?${params.toString()}`);
    refetch();
  }


  return (
    <>
      <div className={` flex justify-between items-center  ${nId && 'smd:flex-wrap smd:w-full'}`}>
        <div className="text-[#FFFFFF] h-[30px]   text-xs smd:text-base font-medium smd:w-full " >
          {!nId && !isOpen && !unbindInfo ? (
            <>
              <span className="text-base">{title}</span>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  closeAll()
                }}
              >
                Nodes {">"} {" "}
              </button>{" "}

              <label
                onClick={() => {
                  if (title !== "Add New Node") return;
                  addRef.current?.switchTo();
                  setSelectedType("");
                  params.delete('chooseType')
                  r.push(`?${params.toString()}`);

                }}
                className={cn({
                  "text-[#FFFFFF80] ": !selectedType,
                  "text-[#FFFFFF] cursor-pointer": selectedType,
                })}
              >
                {title}
              </label>
              {selectedType && (
                <span>
                  {" "}
                  {">"}{" "}
                  <span className={"text-[#FFFFFF80]"}> {selectedType}</span>
                </span>
              )}
            </>
          )}
        </div>
        {!nId && !isOpen ? (
          <Btn
            className="h-[1.875rem] smd:p-2 smd:!h-[1.875rem]  rounded-lg"
            onClick={() => {
              setOpenAddNode(!isOpen);
              updateURL('type', 'add')
            }}
          >
            Add New Node
          </Btn>
        ) : (
          !isOpen &&
          !unbindInfo && (
            <div className="flex gap-[.625rem] smd:justify-end smd:pt-[10px]   font-medium text-xs leading-3  smd:w-full">

              {nodeInfo?.nodeType === 'box' && <Btn
                onPress={() => {
                  params.delete('nId')
                  updateURL('type', 'link')
                  ac.setLink(sortIp(nodeInfo?.deviceInfo.networkInterfaces || [])[0].ip)
                }

                }
                className="h-[1.875rem] rounded-lg smd:!h-[1.875rem]"
              >
                Go to Web Console
              </Btn>
              }
              <Btn
                onPress={() => {
                  updateURL('type', 'del')

                }}
                className="bg-[#F5F5F51A] border-white text-white smd:!h-[1.875rem] h-[1.875rem] rounded-lg  hover:!bg-default"
              >
                Delete
              </Btn>
            </div>
          )
        )}
      </div >
      {
        unbindInfo ? (
          <AUnbind
            nodeId={unbindInfo}
            onBack={() => {
              setUnbingInfo("");
              params.delete('nId')
              setOpenAddNode(false);
              refetch();
              setSelectedType("");
              params.delete('type')
              params.delete('chooseType')

              r.push(`?${params.toString()}`);
            }}
          />
        ) : !nId && !isOpen ? (
          (!data || !data.length) && !isFetching ? (
            <div className="w-full flex justify-center items-center mt-[6.5625rem]  ">
              <div className="w-[37.5rem] m-auto text-center gap-5 flex flex-col">
                <div className=" text-lg ">Add Your Edge Node</div>
                <div className="text-sm text-[#FFFFFF80]">
                  ARO supports both hardware and software Edge Nodes on various platforms. Check <button onClick={() => window.open('https://docs.aro.network/edge-node/types', '_blank')} className="underline underline-offset-1 hover:text-[#00E42A]">our guide</button> to choose the best node type for you.


                </div>
                <Btn
                  className="h-10 w-[11.875rem] flex justify-center text-center rounded-lg text-xs font-medium m-auto"
                  onPress={() => {
                    setOpenAddNode(!isOpen);
                    updateURL('type', 'add')
                  }}
                >
                  Add New Node
                </Btn>
              </div>
            </div>
          ) : (
            <ACommonNodes
              isLoading={isFetching}
              data={data}
              onOpenModal={handleToggleNodeInfo}
            />
          )
        ) : isOpen ? (
          <AAddNewNodes
            addRef={addRef}
            onSelectedType={setSelectedType}
            onBack={() => {
              params.delete('nId')
              setOpenAddNode(!isOpen);
              refetch();
              setSelectedType("");
              params.delete('type')
              params.delete('chooseType')
              r.push(`?${params.toString()}`);
            }}
          />
        ) : (
          <ANodeInfo
            nodeInfo={setNodeInfo}
            onBack={() => {
              params.delete('nId')
              params.delete('type')
              params.delete('chooseType')
              r.replace(`?${params.toString()}`);
            }}
          />
        )}
    </>
  );
};

export default ANodes;

