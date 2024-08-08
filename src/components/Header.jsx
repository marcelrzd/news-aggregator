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
        <h1 className="text-xl">News Aggregator</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Settings className="cursor-pointer" size={32} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="sm:w-56 w-80">
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
                        <Label htmlFor="source" className="text-right">
                          Source
                        </Label>
                        <Select>
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Select a Source" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="BBC News">BBC News</SelectItem>
                              <SelectItem value="New York Times">
                                New York Times
                              </SelectItem>
                              <SelectItem value="Laura Fox">
                                Laura Fox
                              </SelectItem>
                              <SelectItem value="Poppy Atkinson Gibson">
                                Poppy Atkinson Gibson
                              </SelectItem>
                              <SelectItem value="Rebecca Lawrence">
                                Rebecca Lawrence
                              </SelectItem>
                              <SelectItem value="Editor">Editor</SelectItem>
                              <SelectItem value="SeekingAlpha.com">
                                SeekingAlpha.com
                              </SelectItem>
                              <SelectItem value="SA Transcripts">
                                SA Transcripts
                              </SelectItem>
                              <SelectItem value="Amrit Dhillon">
                                Amrit Dhillon
                              </SelectItem>
                              <SelectItem value="Philip Bump">
                                Philip Bump
                              </SelectItem>
                              <SelectItem value="The New York Times">
                                The New York Times
                              </SelectItem>
                              <SelectItem value="Raymond Ibrahim">
                                Raymond Ibrahim
                              </SelectItem>
                              <SelectItem value="Codie Bullen">
                                Codie Bullen
                              </SelectItem>
                              <SelectItem value="Bernama">Bernama</SelectItem>
                              <SelectItem value="Laura Parkin">
                                Laura Parkin
                              </SelectItem>
                              <SelectItem value="Laura Snapes">
                                Laura Snapes
                              </SelectItem>
                              <SelectItem value="Anders Joelson">
                                Anders Joelson
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid items-center grid-cols-4 gap-4">
                        <Label htmlFor="authors" className="text-right">
                          Authors
                        </Label>
                        <Select>
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Select an Author" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="BBC News">BBC News</SelectItem>
                              <SelectItem value="Laura Fox">
                                Laura Fox
                              </SelectItem>
                              <SelectItem value="Poppy Atkinson Gibson">
                                Poppy Atkinson Gibson
                              </SelectItem>
                              <SelectItem value="Rebecca Lawrence">
                                Rebecca Lawrence
                              </SelectItem>
                              <SelectItem value="Editor">Editor</SelectItem>
                              <SelectItem value="SeekingAlpha.com">
                                SeekingAlpha.com
                              </SelectItem>
                              <SelectItem value="SA Transcripts">
                                SA Transcripts
                              </SelectItem>
                              <SelectItem value="Amrit Dhillon">
                                Amrit Dhillon
                              </SelectItem>
                              <SelectItem value="Philip Bump">
                                Philip Bump
                              </SelectItem>
                              <SelectItem value="The New York Times">
                                The New York Times
                              </SelectItem>
                              <SelectItem value="Raymond Ibrahim">
                                Raymond Ibrahim
                              </SelectItem>
                              <SelectItem value="Codie Bullen">
                                Codie Bullen
                              </SelectItem>
                              <SelectItem value="Bernama">Bernama</SelectItem>
                              <SelectItem value="Laura Parkin">
                                Laura Parkin
                              </SelectItem>
                              <SelectItem value="Laura Snapes">
                                Laura Snapes
                              </SelectItem>
                              <SelectItem value="Anders Joelson">
                                Anders Joelson
                              </SelectItem>
                              <SelectItem value="Unknown Author">
                                Unknown Author
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid items-center grid-cols-4 gap-4">
                        <Label htmlFor="authors" className="text-right">
                          Categories
                        </Label>
                        <Select>
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Select a Category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="general">General</SelectItem>
                              <SelectItem value="tv">TV</SelectItem>
                              <SelectItem value="television">
                                Television
                              </SelectItem>
                              <SelectItem value="finance">Finance</SelectItem>
                              <SelectItem value="world">World</SelectItem>
                              <SelectItem value="politics">Politics</SelectItem>
                              <SelectItem value="regional">Regional</SelectItem>
                              <SelectItem value="national">National</SelectItem>
                              <SelectItem value="science">Science</SelectItem>
                            </SelectGroup>
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
