import ProfilePage from "../components/setting/profile";
const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    }
}
export default function SettingsPage() {
    return(
        <div style={{ padding: 32 }}>
            <ProfilePage user={data.user} />
        </div>
    );
}