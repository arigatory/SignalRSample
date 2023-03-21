namespace SignalRSample
{
    public static class SD
    {
        static SD()
        {
            DeathlyHallowRace = new Dictionary<string, int>
            {
                { Cload, 0 },
                { Stone, 0 },
                { Wand, 0 }
            };
        }

        public const string Wand = "wand";
        public const string Stone = "stone";
        public const string Cload = "cloak";

        public static Dictionary<string, int> DeathlyHallowRace;
    }
}
