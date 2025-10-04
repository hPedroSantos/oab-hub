import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, User, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 gradient-oab rounded-xl flex items-center justify-center shadow-medium">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-foreground">OAB Quest Hub</h1>
              <p className="text-xs text-muted-foreground">Pratique para a prova</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              Questões
            </Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              Estatísticas
            </Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              Simulados
            </Button>
          </nav>

          {/* User Actions */}
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="hidden sm:flex">
              <span className="w-2 h-2 bg-success rounded-full mr-2"></span>
              Online
            </Badge>
            
            <Button 
              variant="outline" 
              size="sm"
              className="hidden sm:flex"
            >
              <User className="w-4 h-4 mr-2" />
              Entrar
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in">
            <div className="flex flex-col gap-3">
              <Button variant="ghost" className="justify-start text-muted-foreground">
                Questões
              </Button>
              <Button variant="ghost" className="justify-start text-muted-foreground">
                Estatísticas
              </Button>
              <Button variant="ghost" className="justify-start text-muted-foreground">
                Simulados
              </Button>
              <Button variant="outline" size="sm" className="self-start mt-2">
                <User className="w-4 h-4 mr-2" />
                Entrar
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}