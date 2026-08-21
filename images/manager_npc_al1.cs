using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.UI;
using MeetAndTalk.GlobalValue;
using MeetAndTalk.Localization;
using UnityEngine.SceneManagement;
using MeetAndTalk;

public class manager_npc_al1 : MonoBehaviour
{

    public npc_al1 npc;
    public int npcID;
    public manager_al1 manager;
    public int maxID = 1;
    public int[] ID;
    public bool dialoguerandom = false;
    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Start()
    {
        manager = (manager_al1)FindFirstObjectByType(typeof(manager_al1));
        npc.npcF = manager.datosserial.npcF[npcID];
    }

    // Update is called once per frame
    void Update()
    {
        if(dialoguerandom == true)
        {
            int IDdialogue = ID[Random.Range(0, maxID)];
            npc.dialogueid = IDdialogue.ToString();
        }
        else
        {
            npc.dialogueid = manager.datosserial.npcF[npcID].ToString();
        }
        
    }
}
