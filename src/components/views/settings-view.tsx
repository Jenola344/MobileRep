import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AiRegionCustomizer } from "../regional/ai-region-customizer";

export function SettingsView() {
    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle>Settings</CardTitle>
                    <CardDescription>Manage your account and app preferences.</CardDescription>
                </CardHeader>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle>Regional Adaptation Tool</CardTitle>
                    <CardDescription>
                        This tool uses Generative AI to adapt UI elements for different regions. 
                        Enter some text and see how it might change based on local language and culture.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <AiRegionCustomizer />
                </CardContent>
            </Card>
        </div>
    )
}
