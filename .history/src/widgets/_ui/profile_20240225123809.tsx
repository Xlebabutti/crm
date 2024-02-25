'use client';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu';
import { LogOut, User } from 'lucide-react';
import { Button } from '@/shared/ui/button';
import Link from 'next/link';

export function Profile() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="p-px rounded-full self-center h-8 w-8"
                ></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mr-2 ">
                <DropdownMenuLabel>
                    <p>Мой аккаунт</p>
                </DropdownMenuLabel>
                <DropdownMenuGroup></DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                        <Link href={`/profile/1`}>
                            <User className="mr-2 h-4 w-4" />
                            <span>Профиль</span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Выход</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
