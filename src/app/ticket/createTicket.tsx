import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"; // Assuming ShadCN includes a TextArea component
import { SelectDemo } from "./Select";
// import { FileUpload } from "@/components/ui/file-upload" // Assuming a component for file uploads, can replace with an actual file upload component from ShadCN

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const CreateTicketModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg">New</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create a new ticket</DialogTitle>
          {/* <DialogDescription>
            Fill out the details to create a new ticket.
          </DialogDescription> */}
        </DialogHeader>
        <form className="grid gap-4 py-4">
          {/* Ticket Type */}
          <div className="space-y-4"> {/* Add space between each section */}
            {/* Ticket Type */}
            <div className="grid grid-cols-1 items-center gap-2">
              <Label htmlFor="ticketType" className="text-left">
                Ticket Type
              </Label>
              <SelectDemo />
            </div>

            {/* System */}
            <div className="grid grid-cols-1 items-center gap-2">
              <Label htmlFor="system" className="text-left">
                System
              </Label>
              <SelectDemo />
            </div>

            {/* National ID */}
            <div className="grid grid-cols-1 items-center gap-2">
              <Label htmlFor="nationalID" className="text-left">
                National ID
              </Label>
              <Input id="nationalID" placeholder="123456" />
            </div>

            {/* Kastle ID */}
            <div className="grid grid-cols-1 items-center gap-2">
              <Label htmlFor="kastleID" className="text-left">
                Kastle ID
              </Label>
              <Input id="kastleID" placeholder="123456" />
            </div>

            {/* Ticket Description */}
            <div className="grid grid-cols-1 items-center gap-2">
              <Label htmlFor="description" className="text-left">
                Ticket Description
              </Label>
              <Textarea id="description" placeholder="Describe the issue here" rows={4} />
            </div>

            <div className="grid grid-cols-1 items-center gap-2">
              <Label htmlFor="description" className="text-left">
                Upload Files
              </Label>
              <div className="mt-2 border-2 border-dashed border-gray-300 rounded-md p-4 flex flex-col items-center text-center">
                <span className="text-blue-500 text-xl">+</span>
                <p className="text-sm text-gray-500 mt-2">
                  Drag & drop files or <span className="text-blue-500 underline cursor-pointer">Browse</span>
                </p>
                <p className="text-xs text-gray-400 mt-1">PDF, DOCX, TXT &bull; ≤ 10 MB</p>
              </div>
            </div>
          </div>
        </form>
        <DialogFooter>
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" onClick={() => console.log('Save ticket')}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTicketModal;
