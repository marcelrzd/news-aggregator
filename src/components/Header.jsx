import { Settings, SlidersHorizontal } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const Header = () => {
  const handleDialogTriggerClick = (e) => {
    e.stopPropagation();
  };

  return (
    <header className="p-4 font-semibold text-center text-gray-600 shadow-md">
      <div className="container flex justify-between">
        <h1>News Aggregator</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Settings className="cursor-pointer" size={32} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Settings</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className="cursor-pointer">
                <Dialog>
                  <DialogTrigger asChild>
                    <div
                      className="flex items-center"
                      onClick={handleDialogTriggerClick}
                    >
                      <SlidersHorizontal className="w-4 h-4 mr-2" />
                      <span>Personalize Feed</span>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Customize Feed</DialogTitle>
                      <DialogDescription>
                        Set your feed preferences here. Click save when you're
                        done.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid items-center grid-cols-4 gap-4">
                        <Label htmlFor="name" className="text-right">
                          Source
                        </Label>
                        <Select>
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Select a Source" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="nyt">
                                The New York Times
                              </SelectItem>
                              <SelectItem value="bbc">BBC News</SelectItem>
                              <SelectItem value="guardian">
                                The Guardian
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid items-center grid-cols-4 gap-4">
                        <Label htmlFor="name" className="text-right">
                          Authors
                        </Label>
                        <Select>
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Select an Author" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup></SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Save changes</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
