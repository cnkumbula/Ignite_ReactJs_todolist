import Container from "../components/container";
import Text from "../components/text";
import Button from "../components/button";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import InputCheckbox from "../components/input-checkbox";
import InputText from "../components/input-text";
import Skeleton from "../components/skeleton";

/*import TrashIcon from "../assets/icons/trash.svg?react"
import CheckIcon from "../assets/icons/Check.svg?react"
import CheckSquareIcon from "../assets/icons/CheckSquare.svg?react"
import ClipboardTextIcon from "../assets/icons/ClipboardText.svg?react"
import PencilSimpleIcon from "../assets/icons/PencilSimple.svg?react"
import XIcon from "../assets/icons/X.svg?react"
import SquareIcon from "../assets/icons/square.svg?react"*/
import LixoIcon from "../assets/icons/lixo.svg?react"
import SpinnerIcon from "../assets/icons/spinner.svg?react"
import PlusIcon from "../assets/icons/Plus.svg?react"
import Badge from "../components/badge";
import Icon from "../components/icon";


export default function PageComponents() {
  return (
    <Container>
      <div className="grid gap-3">
        <div className="flex flex-col gap-1">
          <Text variant="body-md" className="text-pink-base"> hello </Text>
          <Text className="text-pink-base"> hello </Text>
          <Text variant="body-md-bold"> hello </Text>
        </div>

        <div className="flex gap-1">
          {/*<LixoIcon className="fill-pink-base"/>
          <CheckIcon className="fill-pink-base"/>
          <CheckSquareIcon className="fill-pink-base"/>
          <ClipboardTextIcon className="fill-pink-base"/>
          <PencilSimpleIcon className="fill-pink-base"/>
          <XIcon className="fill-pink-base"/>
          <SquareIcon className="fill-pink-base"/>*/}

          <Icon svg={LixoIcon} className="fill-pink-base"/>
          <Icon svg= {SpinnerIcon} animate className="fill-pink-base"/>

        </div>

        <div className="flex gap-1">
          <Badge variant={"primary"}>5</Badge>
          <Badge variant={"secondary"}> 2 de 5</Badge>
          <Badge loading>5</Badge>

        </div>

        <div>
          <Button icon={PlusIcon}>New Task</Button>
        </div>

        <div className="flex gap-1">
          <ButtonIcon icon={LixoIcon} />
          <ButtonIcon icon={LixoIcon} variant={"secondary"}/>
          <ButtonIcon icon={LixoIcon} variant={"tertiary"}/>
          <ButtonIcon icon={LixoIcon} loading/>

        </div>
          
        <div>
          <InputText />
          
        </div>

        <div>
          <InputCheckbox/>

          <InputCheckbox loading/>
          
        </div>

        <div>
          <Card size="md">ola</Card>
        </div>

        <div className="space-y-2">
          <Skeleton className="h-6" />
          <Skeleton className="h-6"/>
          <Skeleton className="w-96 h-6"/>
        </div>

      </div>

    </Container>
  )
}